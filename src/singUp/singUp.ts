import Vue from 'vue'
import Component from 'vue-class-component'
import * as Template from './singUp.html'
import userValidator from '../validator/userValidator'


@Template
@Component
export default class signUp extends Vue {

    ruleForm2 = {
        pass: '',
        checkPass: '',
        age: ''
    };

    rules2 = userValidator;


    submitForm(formName:any) {
        var form: any = this.$refs[formName];

        form.validate((valid: any) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                }
            }
        );
    }

    resetForm(formName:any) {
        var form: any = this.$refs[formName];
        form.resetFields();
    }


}