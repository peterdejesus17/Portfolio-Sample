let forms_box = document.getElementById("forms-sections");

var create_forms_input = (element, type, element_id, class_value, value_holder) => {
    const new_element = document.createElement(element);
    new_element.setAttribute("type", type);
    new_element.setAttribute("id", element_id);
    new_element.setAttribute("class", class_value)
    
    // if input type is radio, make a new element for the radio button label
    if (type=="radio") {
        new_element.setAttribute("value", value_holder)
        const radio_label = document.createElement("label");
        radio_label.innerHTML = value_holder;
        forms_box.appendChild(new_element);
        forms_box.appendChild(radio_label);
    }
    else {
        new_element.setAttribute("placeholder", value_holder);
        forms_box.appendChild(new_element);
    }
    
    
}

var create_forms_radio = () => {

    
}

create_forms_input("input", "text", "first-name", "forms", "First Name");
create_forms_input("input", "text", "last-name", "forms", "Last Name");
create_forms_input("input", "radio", "male", "forms", "Male");
create_forms_input("input", "radio", "female", "forms", "Female");
create_forms_input("input", "radio", "other", "forms", "Other");