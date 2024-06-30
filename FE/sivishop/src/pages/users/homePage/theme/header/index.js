import { memo } from 'react';
import { 
    AiOutlineFacebook, 
    AiOutlineInstagram, 
    AiOutlineLinkedin, 
    AiOutlineGlobal,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineShoppingCart       
} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { fomater } from 'utils/fomater'
import './style.scss';

const Header = () => {
    return <>
        <div className='header_top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li>
                                <AiOutlineMail />
                                <span>hello@gmail.com</span>
                            </li>
                            <li>
                                Miễn phí ship đơn từ {fomater(200000)}
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineGlobal  />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser   />
                                    <span>Đăng nhập</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <div className='container'>
            <div className='row'>
                <div className='col-xl-3'>
                    <div className='header_top'>
                        <h1>Sivi Shop</h1>
                    </div>
                </div>
                <div className='col-xl-6'>MENUS</div>
                <div className='col-xl-3'>
                    <div className='header_cart'>
                        <div className='header_cart_price'>
                            <span>{fomater(1001234)}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to="#">
                                    <AiOutlineShoppingCart /> <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default memo(Header)