function extensibleObject() {
    let proto = {};
    let inst = Object.create(proto);
    inst.extend = function (template) {
        for (const [key, value] of Object.entries(template)) {
            if(typeof value === 'function'){
                proto[key] = value;
            } else {
                inst[key] = value;
            }
        }
    }
    return inst
}
extensibleObject()

