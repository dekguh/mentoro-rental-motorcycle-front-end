import Label from '../../../atomics/form/Label'
import Input from '../../../atomics/form/Input'

const FormTextarea = ({ classes, labelText, content, ...rest }) => {
    return (
        <div className={classes ? `form__group ${classes}` : 'form__group'}>
            {labelText && <Label text={labelText}/>}
            <textarea
                className='form__control'
                {...rest}
            >{content}</textarea>
        </div>
    )
}

export default FormTextarea
