import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Cascader, Form, message, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { FailedSaveCategories, StartSaveCategories } from '../../Redux/actions/actions';
import { rule } from './../../Other/AdvertSettings';

function SelectCategoryStep({ handle }) {

  const categories = useSelector(state => state.categories);
  const categoriesData = categories.data;
  const subCategories = useSelector(state => state.subCategories);
  const subCategoriesData = subCategories.data;
  const [categoryLoading, setCategoryLoading] = useState(true);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const dispatch = useDispatch();


  dispatch(StartSaveCategories());
  setTimeout(() => { // Bu kısım setTimeout değil canlı data geldiğinde sonlanack!
    dispatch(FailedSaveCategories())
    setCategoryLoading(categories.loading);
  }, 2500);

  const [options, setOptions] = React.useState(categoriesData);

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    handle();
    message.success("Seçildi")
  };

  const loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = subCategoriesData.filter(sub => sub?.topCategoryId === selectedOptions[0]?.id);
      setOptions([...options]);
    }, 750);
  };



  if (categoryLoading === true) {
    return (
      <div className='loading-categories'>
        <Spin size='large' indicator={antIcon} />
        <small>Kategoriler yükleniyor...</small>
      </div>
    )
  }
  else {
    return (
      <div className="select-category-step-component">
        <Form.Item label="İlan Kategoriesi" required rules={[rule]}>
          <div id="single-category-list">
            <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect size="large" />
          </div>
        </Form.Item>
      </div>
    );
  }


}

export default SelectCategoryStep;
