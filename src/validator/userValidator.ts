let checkAge = (rule:any, value:any, callback:any) => {
    if (!value) {
        return callback(new Error('Please input the age'));
    }
    setTimeout(() => {
        var n : any = Number;
        if (!n.isInteger(value)) {
            callback(new Error('Please input digits'));
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'));
            } else {
                callback();
            }
        }
    }, 1000);
};

let validatePass = (rule:any, value:any, callback:any) => {
    if (value === '') {
        callback(new Error('Please input the password'));
    } else {
        callback();
    }
};

let validatePass2 = (rule:any, value:any, callback:any) => {
    if (value === '') {
        callback(new Error('Please input the password again'));
    } else {
        callback();
    }
};

let rules2 = {
    pass: [
        { validator: validatePass, trigger: 'change' }
    ],
        checkPass: [
        { validator: validatePass2, trigger: 'change' }
    ],
        age: [
        { validator: checkAge, trigger: 'change' }
    ]
};


export default rules2