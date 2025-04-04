import React, { useEffect, useState } from "react";
import MainLoader from "../../5Entities/Loaders/MainLoader";
import ServerSelection from "../../7ServerList/ServerSelection";
import '@styles/ServerList.css';

export default function ServerList() {
    const [data, setData] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setData({
                "count": 2,
                "items": [
                    {
                        "id": 222485128,
                        "name": "Vk api",
                        "screen_name": "vkapitoster",
                        "is_closed": 2,
                        "type": "group",
                        "is_admin": 1,
                        "admin_level": 3,
                        "is_member": 1,
                        "is_advertiser": 1,
                        "photo_50": "https://sun1-19.userapi.com/impf/XflwIQpiW7eTSf95MQ-Nver647DeVm2WJTC3rw/H-QugqVUlkA.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&sign=61027d210ccb0a59d7af739beb9110ba&u=aNilTjpajNGXznoAFiBsCyhWBvZZx5t-H0ovp9gVz-s&cs=50x50",
                        "photo_100": "https://sun1-19.userapi.com/impf/XflwIQpiW7eTSf95MQ-Nver647DeVm2WJTC3rw/H-QugqVUlkA.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&sign=61027d210ccb0a59d7af739beb9110ba&u=aNilTjpajNGXznoAFiBsCyhWBvZZx5t-H0ovp9gVz-s&cs=100x100",
                        "photo_200": "https://sun1-19.userapi.com/impf/XflwIQpiW7eTSf95MQ-Nver647DeVm2WJTC3rw/H-QugqVUlkA.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&sign=61027d210ccb0a59d7af739beb9110ba&u=aNilTjpajNGXznoAFiBsCyhWBvZZx5t-H0ovp9gVz-s&cs=200x200"
                    },
                    {
                        "id": 226477408,
                        "name": "LordCord - Community",
                        "screen_name": "lordcord",
                        "is_closed": 0,
                        "type": "group",
                        "is_admin": 1,
                        "admin_level": 3,
                        "is_member": 1,
                        "is_advertiser": 1,
                        "photo_50": "https://sun1-86.userapi.com/s/v1/ig2/7MIaRZ3JqhKUgV7-mUBxykswYpj8yXTtmq-8ZSw77TwRHP5Wiv1pLF6CfPdmFukGYclu_FNnn3Pov0AnsIelA0kS.jpg?quality=95&crop=0,0,512,512&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480&ava=1&cs=50x50",
                        "photo_100": "https://sun1-86.userapi.com/s/v1/ig2/7MIaRZ3JqhKUgV7-mUBxykswYpj8yXTtmq-8ZSw77TwRHP5Wiv1pLF6CfPdmFukGYclu_FNnn3Pov0AnsIelA0kS.jpg?quality=95&crop=0,0,512,512&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480&ava=1&cs=100x100",
                        "photo_200": "https://sun1-86.userapi.com/s/v1/ig2/7MIaRZ3JqhKUgV7-mUBxykswYpj8yXTtmq-8ZSw77TwRHP5Wiv1pLF6CfPdmFukGYclu_FNnn3Pov0AnsIelA0kS.jpg?quality=95&crop=0,0,512,512&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480&ava=1&cs=200x200"
                    }
                ]
            })
        }, 1000)
    }, ["1"])


    
    console.log(data)
    if (data.items === undefined) {
        return <MainLoader />
    }
    
    return <ServerSelection data={data} />
}