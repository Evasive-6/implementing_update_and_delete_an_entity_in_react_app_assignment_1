import React, { useState } from "react";

const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    const [formState, setFormState] = useState({
        name: item.name,
        price: item.price
    });

    // 2. Create a function to handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the update logic here
        console.log("Form submitted:", formState);
    };

    // 3. Create a function to handle the form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formState.price}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateItem;
