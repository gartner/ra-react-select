import React, {useState} from 'react';
import PropTypes, {element} from 'prop-types';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { Labeled, useCreate, useInput } from 'react-admin';

export const RaReactSelect = (props) => {

    const {
        valueField,
        labelField,
    } = props;

    const getOptionValue = (option) => option[valueField];

    const getOptionLabel = (option) => {
        return option[labelField];
    };

    const options = props.choices.map((slice) => {
        return { value: getOptionValue(slice), label: getOptionLabel(slice)};
    });

    let values = props.input.value.map((id) => {
        return ({
            value: id,
            label: options.find((element => element.value === id))?.label || '',
        })
    });

    const handleChange = (selectedOption) => {
        const ids = selectedOption.map((slice) => slice.value);
        props.input.onChange(ids);
    };

    const [creator, {loading, error: createError}] = useCreate(props.reference);

    const onCreateOption = (value) => {

        creator({
                payload: {
                    data: {
                        [labelField]: value,
                    }
                }
            },
            {
                onSuccess: (result) => {
                    const id = result.data[valueField];
                    props.input.onChange([...props.input.value, id]);
                }

            });
    };

    const {
        input: { name, onChange },
        meta: { touched, error },
        isRequired
    } = useInput(props);

    const {
        isMulti,
        className,  // This comes from react-admin, styling is wrong when using it
        ...rest
    } = props;

    const customStyles = {
        container: (provided, state) => ({
                ...provided,
                width: '100%'
            }),
        menu: (provided, state) => ({
            ...provided,
            zIndex: 10,
        })
    };

    if (props.isCreatable === true) {
        return (
            <Labeled
                label={props.label}
                isRequired={props.required}
                fullWidth={props.fullWidth}
            >
            <CreatableSelect
                isMulti={isMulti}
                className={className}
                {...rest}
                onChange={handleChange}
                onCreateOption={onCreateOption}
                options={options}
                value={values}
                fullWidth={props.fullWidth}
                styles={customStyles}
            />
            </Labeled>
        );
    }

    return (
        <Select
            isMulti={isMulti}
            {...rest}
            onChange={handleChange}
            options={options}
            value={values}
        />
    );

};

RaReactSelect.propTypes = {
    choices: PropTypes.array,
    valueField: PropTypes.string,
    labelField: PropTypes.string,
    hideSelectedOptions: PropTypes.bool,
};

RaReactSelect.defaultProps = {
    valueField: 'id',
    labelField: 'label',
    hideSelectedOptions: false,
};

//export default addField(RaReactSelect);
export default RaReactSelect;
