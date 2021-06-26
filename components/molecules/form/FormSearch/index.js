import { Search } from "react-bootstrap-icons";
import Input from "../../../atomics/form/Input";

const FormSearch = ({...rest}) => {
    return (
        <div style={{ position: 'relative' }}>
            <i className='form__search-icon'>
                <Search />
            </i>
            <Input
                placeholder='search motorcycle'
                classes='rounded-20'
                style={{
                    paddingLeft: '40px'
                }}
                {...rest}
            />
        </div>
    )
}

export default FormSearch
