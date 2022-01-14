
export class ProductAttributeDefinition{
    constructor(...args){
        const {id,dataType,key,localizable,countryBased,mandatory,multiple,order} = args[0];
        this.id = id;
        this.dataType = dataType;
        this.key = key;
        this.localizable = localizable;
        this.countryBased = countryBased;
        this.mandatory = mandatory;
        this.multiple = multiple;
        this.order = order;
    }
}
