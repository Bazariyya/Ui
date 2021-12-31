

export class Category{
    constructor(id,name,isTopCategory) {
        this.id = id;
        this.label = name;
        this.isLeaf = isTopCategory;
        this.value = name;
    }
}