import "./product.scss";

import Navbar from "../../components/navbar/Navbar";

const Product = (props) => {
    const data = [
        {
            name: "sách 1",
            price: "30.000 vnd",
            author: "tác giả 1",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 2",
            price: "35.000 vnd",
            author: "tác giả 2",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 3",
            price: "30.000 vnd",
            author: "tác giả 3",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 1",
            price: "30.000 vnd",
            author: "tác giả 1",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 1",
            price: "30.000 vnd",
            author: "tác giả 1",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        }
    ]


    return (
        <div className="product">

            <Navbar></Navbar>

            <div className="wrapper">
                {data.map((product) => {
                    return (
                        <div className="item">
                            <div className="top">
                                <img src={product.img} alt="product-img"></img>
                            </div>

                            <div className="footer">
                                <div className="info">
                                    <div className="name-author">{product.name} - {product.author}</div>
                                    <div className="price">{product.price}</div>
                                </div>
                                <div className="add-to-cart">Add to cart</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Product