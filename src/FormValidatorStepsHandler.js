// Each step is a form
// option: allowGoingBack
// option: onlyAllowForwardingWhenStepIsValid
// option autoStartOnFirstStep
// fazer metodos avançar e voltar
// cada passo tera uma classe pra dizer que o step está ativo/inativo, se é o proximo ou o anterior, se é o primeiro ou o último e idenficar o numero via html mesmo
// Cada passo tb terá classe pra dizer se a step ta ativa ou inativa
// eventos onStepActivate / inactivate


/// Will suppress each validator's submit method???? 

class FormValidatorStepsHandler {

    constructor(options) {

        this.steps = options.steps;
        this.currentStepIndex = undefined;
        this.onUpdate = options.onUpdate;
        this.enableStrictStepsOrder = options.enableStrictStepsOrder;

        return this.init()
    }

    init() {

        if(this.steps.length <= 1) { // Duh!
            return;
        }

        for(let i = 0; i < this.steps.length; i++) {
            let step = this.steps[i];
            let $stepForm = step.formValidatorInstance.$form;

            let handleStepFormChange = (e) => {
                // this.update()
            }

            step.formValidatorInstance._onUpdate = () => {
                this.update()
            }

            if(step.formValidatorInstance && step.formValidatorInstance.$form) {
                $stepForm.addEventListener("change", handleStepFormChange);

                let _this = this;
                step.formValidatorInstance.submitFn = ((validator, cb) => {
                    _this.next();
                    cb(false)
                })
            }

        }

        this.start(); // TODO: if config says it auto starts

        this.update();

        return this
        
    }


    update() {

        for(let i = 0; i < this.steps.length; i++) {
            let step = this.steps[i];
            
            let status;
            let enabled;

            let stepValidator = step.formValidatorInstance;

            if(stepValidator.isValid()) {
                status = 1
            } else if(stepValidator.isValidating()) {
                status = -1
            } else {
                status = 0
            }
            
            if(typeof step.enabled === "function" && !step.enabled()) {
                enabled = true;
            } else {
                enabled = false
            }

            step._state = {
                active: (this.currentStepIndex === i),
                status: status,
                enabled: enabled
            };
            
        }

        (this.onUpdate) && this.onUpdate();
        
    }

    setStep(stepIndex) {

        if(stepIndex < 0 || stepIndex >= this.steps.length || !this.steps[stepIndex]) {
            return;
        }

        let _setStep = () => {
            for(let i = 0; i < this.steps.length; i++) {
                let step = this.steps[i];
                step.formValidatorInstance.$form.classList.add('d-none');
            }
            
            this.steps[stepIndex].formValidatorInstance.$form.classList.remove('d-none');
            this.currentStepIndex = stepIndex;
            this.update()
        }
        
        if(this.enableStrictStepsOrder) {

            let validatorsPromises = [];
            for(let i = stepIndex-1; i>=0; i--) {
                validatorsPromises.push(this.steps[i].formValidatorInstance._validate());
            }


            Promise.all(validatorsPromises).then(() => {
                _setStep()
            }).catch(() => {
                if(this.steps[stepIndex].formValidatorInstance.isValid()) {
                    _setStep()
                }
            })

            
        } else {
            _setStep()
        }

    }

    next() {
        this.steps[this.currentStepIndex].formValidatorInstance._validate().then(() => {
            this.setStep(this.currentStepIndex + 1);
        }).catch(() => {})
    }

    previous() {
        this.setStep(this.currentStepIndex - 1);
    }

    forEachStep(fn, i) {
        
    }

    reset() {
        for(let i = 0; i < this.steps.length; i++) {
            let step = this.steps[i];
            step.formValidatorInstance.resetForm();
        }
        this.setStep(0);
    }


    start() {
        this.setStep(0);
    }


}

export default FormValidatorStepsHandler