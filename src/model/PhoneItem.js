
class PhoneItem {

    constructor(name, content) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        this.name = name;
    }


    static fromJSON (json) {
        let phoneItem = new PhoneItem();
        phoneItem.id = json.id;
        phoneItem.content = json.content;
        phoneItem.name = json.name;

        return phoneItem;
    }
}

export default PhoneItem;