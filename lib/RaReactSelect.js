"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RaReactSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _creatable = _interopRequireDefault(require("react-select/creatable"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RaReactSelect = function RaReactSelect(props) {
  var valueField = props.valueField,
      labelField = props.labelField;

  var getOptionValue = function getOptionValue(option) {
    return option[valueField];
  };

  var getOptionLabel = function getOptionLabel(option) {
    return option[labelField];
  };

  var options = props.choices.map(function (slice) {
    return {
      value: getOptionValue(slice),
      label: getOptionLabel(slice)
    };
  });
  var values = props.input.value.map(function (id) {
    var _options$find;

    return {
      value: id,
      label: ((_options$find = options.find(function (element) {
        return element.value === id;
      })) === null || _options$find === void 0 ? void 0 : _options$find.label) || ''
    };
  });

  var handleChange = function handleChange(selectedOption) {
    var ids = selectedOption.map(function (slice) {
      return slice.value;
    });
    props.input.onChange(ids);
  };

  var _useCreate = (0, _reactAdmin.useCreate)(props.reference),
      _useCreate2 = _slicedToArray(_useCreate, 2),
      creator = _useCreate2[0],
      _useCreate2$ = _useCreate2[1],
      loading = _useCreate2$.loading,
      createError = _useCreate2$.error;

  var onCreateOption = function onCreateOption(value) {
    creator({
      payload: {
        data: _defineProperty({}, labelField, value)
      }
    }, {
      onSuccess: function onSuccess(result) {
        var id = result.data[valueField];
        props.input.onChange([].concat(_toConsumableArray(props.input.value), [id]));
      }
    });
  };

  var _useInput = (0, _reactAdmin.useInput)(props),
      _useInput$input = _useInput.input,
      name = _useInput$input.name,
      onChange = _useInput$input.onChange,
      _useInput$meta = _useInput.meta,
      touched = _useInput$meta.touched,
      error = _useInput$meta.error,
      isRequired = _useInput.isRequired;

  var isMulti = props.isMulti,
      className = props.className,
      rest = _objectWithoutProperties(props, ["isMulti", "className"]);

  var customStyles = {
    container: function container(provided, state) {
      return _objectSpread({}, provided, {
        width: '100%'
      });
    },
    menu: function menu(provided, state) {
      return _objectSpread({}, provided, {
        zIndex: 10
      });
    }
  };

  if (props.isCreatable === true) {
    return _react["default"].createElement(_reactAdmin.Labeled, {
      label: props.label,
      isRequired: props.required,
      fullWidth: props.fullWidth
    }, _react["default"].createElement(_creatable["default"], _extends({
      isMulti: isMulti,
      className: className
    }, rest, {
      onChange: handleChange,
      onCreateOption: onCreateOption,
      options: options,
      value: values,
      fullWidth: props.fullWidth,
      styles: customStyles
    })));
  }

  return _react["default"].createElement(_reactSelect["default"], _extends({
    isMulti: isMulti
  }, rest, {
    onChange: handleChange,
    options: options,
    value: values
  }));
};

exports.RaReactSelect = RaReactSelect;
RaReactSelect.propTypes = {
  choices: _propTypes["default"].array,
  valueField: _propTypes["default"].string,
  labelField: _propTypes["default"].string,
  hideSelectedOptions: _propTypes["default"].bool
};
RaReactSelect.defaultProps = {
  valueField: 'id',
  labelField: 'label',
  hideSelectedOptions: false
}; //export default addField(RaReactSelect);

var _default = RaReactSelect;
exports["default"] = _default;