// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Vue from "vue";

class Errors {
    constructor() {
        this.errors = {};
    }

    has(field) {
        return Object.prototype.hasOwnProperty.call(this.errors, field);
        // return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    nestedGet(...args) {
        let value = null;
        for (const arg in args) {
            if (this.errors[args[arg]]) {
                value = this.errors[args[arg]];
            }
        }
        return value;
    }

    record(errors) {
        this.errors = errors;
    }

    clear(event = null) {
        if (event) {
            const field = event.target.name;
            if (
                event.target.getAttribute("row") === "true" &&
                Object.prototype.hasOwnProperty.call(this.errors, "rows")
            ) {
                Vue.delete(this.errors, "rows");
                return;
            }
            if (field) {
                Vue.delete(this.errors, field);
                return;
            }
        }
        this.errors = {};
    }
}

export default Vue.extend({
    props: {
        fields: {
            type: [Object]
        },
        action: String,
        submitAsModal: String,
        defaultFieldsValues: Object,
        successUrl: String,
        enableResetFormOnSuccess: String,
        formInstanceId: String,
        params: String,
    },
    data() {
        const dct = {};
        dct.originalFields = Object.assign({}, this.fields);
        dct.field_names = [];
        for (const field in this.data) {
            dct.field_names.push(field)
        }
        dct.errors = new Errors();

        return dct
    },
    methods: {
        reset(): void {
            // this.errors.clear();
        },
        goBack(): void {
            this.$router.go(-1);
        },
        getFieldsData(): Record<string, unknown> {
            let payload = this.fields;
            if (this.defaultFieldsValues !== 'undefined') {
                payload = Object.assign({}, payload, this.defaultFieldsValues)
            }

            return payload;
        },
        save(url: string): void {
            let verb;
            // console.log(this)
            // if (this.fields.reference || this.fields.id) {
            if (this.fields.id) {
                verb = "put";
            } else {
                verb = "post";
            }
            this.submit(verb, url);
        },
        post(url: string): Promise<unknown> {
            return this.submit("post", url);
        },
        put(url: string): Promise<unknown> {
            return this.submit("put", url);
        },
        patch(url: string): Promise<unknown> {
            return this.submit("patch", url);
        },
        remove(url: string): Promise<unknown> {
            return this.submit("delete", url);
        },
        resetForm(): void {
            Object.assign(this.fields, this.originalFields);
        },
        submit(method: string, url: string): Promise<unknown> {
            return new Promise((resolve, reject) => {
                // this.$http[method](url, this.getFieldsData())
                //     .then(({data}) => {
                //         // console.log(data);
                //         this.onSuccess(data);
                //         if (this.submitAsModal) {
                //             this.$parent.$emit('saveAsModal', data); // catch by Modal.vue, to update selectize options
                //             this.$parent.$parent.$emit('saveAsModal', data);
                //         } else {
                //             if (this.successUrl) {
                //                 this.$parent.$emit('success', data, this.successUrl);
                //             } else {
                //                 this.$parent.$emit('success', data);
                //             }
                //             this.$emit("success", data);
                //         }
                //         this.resetForm();
                //         resolve(data);
                //     })
                //     .catch(error => {
                //         this.$parent.$emit('error', error.response.data);
                //         console.log(error.response.status);
                //         console.log(error.response.data)
                //         // console.log(error)
                //         // if (method === "delete") {
                //         //     this.onFail(error.data);
                //         // this.$toasted.global.toast_delete();
                //         // }
                //         if ('data' in error) {
                //             this.onFail(error.data);
                //             // this.$parent.$emit('failure', error.response.data)
                //             reject(error.data);
                //         } else {
                //             this.onFail(error.response.data);
                //             reject(error.response.data);
                //         }
                //
                //     });
            });
        },
        onSuccess(data: Record<string, unknown>): void {
            console.log(data)
            this.reset();
        },
        onFail(errors: Record<string, unknown>): void {
            console.log(errors)
        }
    },
})
