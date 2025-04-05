import React from "react"


export default function ServerButton({data}) {
    return <>
        <button className="server" onClick={() => window.location.href=`https://t3mtsh6z-5000.euw.devtunnels.ms/vk/invite?group=${data.id}`}>
            <div className="server-icon">
                <img src={data.photo_200} alt={data.name} />
            </div>
            <span className="server-text">{data.name}</span>
        </button>
    </>
}