import React, { useState } from "react";
export default function SearchBar(prop) {
    const { setSearch, search } = prop;
    const [isTyping, setIsTyping] =useState(false)
    const handleInputChange = (e) => {
        setSearch(e.target.value);
        setIsTyping(e.target.value.trim() !== '');
    };

    const clearInput = () => {
       setSearch("")
       setIsTyping(false)
    };

    return (
        <>
            <h1>Search results</h1>
            <div style={{ position: 'relative' }}>
                <input
                    type="text"
                    placeholder="Search here"
                    value={search}
                    onChange={handleInputChange}
                />
                {isTyping && (
                    <button
                        style={{
                            position: 'absolute',
                            right: '41.5%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0',
                            outline: 'none',
                        }}
                        onClick={clearInput}
                    >
                        x
                    </button>
                )
                }
            </div>
        </>
    );
}
