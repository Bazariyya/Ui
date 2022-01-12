import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;
function Sorting({handle}) {
  function handleChange(value) {
    handle(value);
  }
  return (
    <Select
      defaultValue={'sirala'}
      style={{ width: 150 }}
      onChange={handleChange}
    >
      <Option value="sirala">Sırala</Option>
      <Option value="artanFiyat">Artan Fiyat</Option>
      <Option value="azalanFiyat">Azalan Fiyat</Option>
    </Select>
  );
}

export default Sorting;
