import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from './ui/select'

import { LANGUAGE_VERSIONS } from '../utils/constants'

function Header({ language, handleLanguageChange, handleSubmit }) {
    return (
        <header className="text-white flex flex-col sm:flex-row items-center justify-between px-4 py-2">
            <div className="flex items-center mb-4 sm:mb-0">
                <Select onValueChange={handleLanguageChange} value={language}>
                    <SelectTrigger className="w-[180px] bg-gray-700 text-white rounded border-none outline-0">
                        <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            {Object.keys(LANGUAGE_VERSIONS).map((lang) => (
                                <SelectItem key={lang} value={lang}>
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <h1 className="text-center text-2xl font-bold mb-4 sm:mb-0">Online Code Compiler</h1>

            <div>
                <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded cursor-pointer" onClick={handleSubmit}>
                    Run Code
                </button>
            </div>
        </header>

    )
}

export default Header