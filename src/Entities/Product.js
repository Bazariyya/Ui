
export class Product{
    constructor(...args){
        this.id = args[0].id
        this.externalId = args[0].externalId
        this.name = args[0].name;
        this.price = args[0].price;
        this.code = args[0].code
        this.barcodes = args[0].barcodes
        this.imagePath = args[0].imagePath
        this.hash = args[0].hash
        this.directSupplyId = args[0].directSupplyId
        this.styleCode = args[0].styleCode
        this.season = args[0].season
        this.colorCode = args[0].colorCode
        this.sizeDefinition = args[0].sizeDefinition
        this.division = args[0].division
        this.divisionId = args[0].divisionId
        this.subDivision = args[0].subDivision
        this.subDivisionId = args[0].subDivisionId
        this.categoryId = args[0].categoryId
        this.isActive = args[0].isActive
    }
}
