import React from "react";
import ServerButton from "./ServerButton";


export default function ServerSelection({data}) {
    return <>
        <div className="server-selection">
            <h1>Выбор сервера</h1>
            <div className="server-list">
                {
                    data.items.map(item => {
                        return <ServerButton data={item} />
                    })
                }
            </div>
        </div>
    </>
} 