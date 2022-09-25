import React from 'react'

function getInput() {
    return document.querySelector('#zipCodeInput').value
}

export default function ZipSearchField({ setCityList, zipcodeAPI }) {
    return <div className="mt-5 ">
        <label>Zip code: </label>
        <br />
        <input className="form-control border rounded" id="zipCodeInput" type="text" placeholder="Enter a zipcode" onChange={
            async () => {
                try {
                    const res = await fetch(zipcodeAPI + getInput())
                    const data = await res.json()
                    setCityList(data)
                } catch (e) {
                    setCityList([])
                }
            }
        } />

    </div>;
}