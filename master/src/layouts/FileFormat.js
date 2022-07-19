import React from 'react';
import "../styles/FileFormat.css";
const FileFormat = () => {
    return (
        // <div>
        //     <table class="table">
        //         <thead>
        //             <tr>
        //                 <th scope="col">Separators</th>
        //                 <th scope="col">Fixed-width</th>
        //             </tr>
        //         </thead>
        //     </table>
        //     <div class="form-check">
        //         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        //         <label class="form-check-label" for="flexCheckDefault">
        //             Space
        //         </label>
        //     </div>
        //     <div class="form-check">
        //         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        //         <label class="form-check-label" for="flexCheckDefault">
        //             Colon(:)
        //         </label>
        //     </div>
        //     <div class="form-check">
        //         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        //         <label class="form-check-label" for="flexCheckDefault">
        //             Multi-split
        //         </label>
        //     </div>
        //     <div class="form-check">
        //         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        //         <label class="form-check-label" for="flexCheckDefault">
        //             Tab
        //         </label>
        //     </div>
        //     <div class="form-check">
        //         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        //         <label class="form-check-label" for="flexCheckDefault">
        //             Semicolon(;)
        //         </label>
        //     </div>
        //     <div class="form-check">
        //         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        //         <label class="form-check-label" for="flexCheckDefault">
        //             Checked checkbox
        //         </label>
        //     </div>
        // </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th colspan="2">Separators</th>
                        <th scope="col">Fixed-width</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Space
                                </label>
                            </div>
                        </td>
                        <td><div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Comma
                                </label>
                            </div></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Colon(:)
                                </label>
                            </div>
                        </td>
                        <td><div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Hypehn(-)
                                </label>
                            </div></td>
                    </tr>

                    <tr>
                        <th scope="row"></th>
                        <td colspan="2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Tab
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Semicolon(;)
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td colspan="2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Multi-split
                                </label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FileFormat;