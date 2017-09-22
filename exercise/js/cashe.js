var result;
class Cache {
    constructor() {
        // super();
        this.data = null;
    }
    get() {
        let data = this.data;
        this.data = null;
        return data;
    }
    set(data) {
        this.data = data;
    }
}


// export default new Cache();
module.exports = {
   set: (data) => {result = data},
   get: () => {
       let data = result;
       result = null;
       return data;
    }
}