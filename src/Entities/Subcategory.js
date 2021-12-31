

import {Category} from './Category'
export class SubCategory extends Category {

    constructor(id,name,isTopCategory,topCategoryId) {
        super(id,name,isTopCategory);
        this.topCategoryId = topCategoryId;
    }
}