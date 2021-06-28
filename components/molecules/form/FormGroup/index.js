import Label from '../../../atomics/form/Label'
import Input from '../../../atomics/form/Input'

const FormGroup = ({ classes, labelText, ...rest }) => {
    return (
        <div className={classes ? `form__group ${classes}` : 'form__group'}>
            {labelText && <Label text={labelText}/>}
            <Input
                {...rest}
            />
        </div>
    )
}

export default FormGroup
