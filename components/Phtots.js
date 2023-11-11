import React from "react";

const Photos = (props) => {
    const myImageTags = props.links.map((photoLink) => {
        return <img src={photoLink} />;
    })  //map() 是回调函数，它会遍历 myLinks 数组中的每个元素，并返回一个新的数组，这个新的数组中的每个元素都是一个 <img> 标签，它的 src 属性值为数组中的元素值。

    return (
        <div>
            <h3>Photos</h3>
            {myImageTags}
        </div>
    );
}   

export default Photos;