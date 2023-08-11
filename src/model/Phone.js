import PhoneItem from "./PhoneItem";

class Phone {

    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();

        return this.items;
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();

        return this.items;
    }


    saveToLocalStorage() {
        localStorage.setItem('phone-data', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('phone-data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (value) => {
            
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let phoneItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            phoneItems.push(PhoneItem.fromJSON(jsonParsed[i]));
        }

        return phoneItems;

    }

}


export default Phone;