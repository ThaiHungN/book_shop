import "./cart.scss";

import Navbar from "../../components/navbar/Navbar";

const Cart = (props) => {
    const data = [
        {
            name: "sách 1",
            price: "30.000 vnd",
            value: 30000,
            author: "tác giả 1",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 2",
            price: "35.000 vnd",
            value: 35000,
            author: "tác giả 2",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 3",
            price: "30.000 vnd",
            value: 30000,
            author: "tác giả 3",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 1",
            price: "30.000 vnd",
            value: 30000,
            author: "tác giả 1",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        },
        {
            name: "sách 1",
            price: "30.000 vnd",
            value: 30000,
            author: "tác giả 1",
            img: "https://metrohanoi.com.vn/wp-content/uploads/khi_hoi_tho_hoa_thinh_khong_2_2019_02_22_14_44_25.jpg"
        }
    ]

    const sum = (items) => {
        let total = 0;
        
        for(let item of items){
            total += item.value
        }

        return total;
    }


    return (
        <div className="cart">

            <Navbar></Navbar>

            <div className="wrapper">
                <div className="item-list">
                    {data.map((item) => {
                        return(
                            <div className="item">
                                <div className="left">{item.name}</div>
                                <div className="right">{item.price}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="total-price">
                    <div className="text">
                        Tổng
                    </div>

                    <div className="value">
                        {sum(data)} VND
                    </div>
                </div>

                <div className="buy">
                    Buy
                </div>
            </div>
        </div>
    );
}

export default Cart