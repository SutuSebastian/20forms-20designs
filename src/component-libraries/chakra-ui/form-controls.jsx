import {
  CheckboxControl,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  CheckboxHiddenInput,
  NativeSelectField,
  NativeSelectIndicator,
  NativeSelectRoot,
} from '@chakra-ui/react'

function Select({ children, placeholder, defaultValue, ...props }) {
  const initialValue =
    props.value === undefined
      ? defaultValue ?? (placeholder ? '' : undefined)
      : undefined

  return (
    <NativeSelectRoot w="full">
      <NativeSelectField {...props} defaultValue={initialValue}>
        {placeholder ? (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        ) : null}
        {children}
      </NativeSelectField>
      <NativeSelectIndicator />
    </NativeSelectRoot>
  )
}

function Checkbox({ children, isRequired, ...props }) {
  return (
    <CheckboxRoot
      {...props}
      required={isRequired || props.required}
      display="flex"
      alignItems="flex-start"
      gap="2"
    >
      <CheckboxControl>
        <CheckboxIndicator />
      </CheckboxControl>
      <CheckboxLabel>{children}</CheckboxLabel>
      <CheckboxHiddenInput />
    </CheckboxRoot>
  )
}

export { Checkbox, Select }
