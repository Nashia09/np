import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import "./widget.scss"


const Widget = ({props}) => {
    let data;
   //temporary
   const amount = 100;
   const diff = 22;

      switch(props){
        case "user":
            data = {
                title:"USERS",
                isMoney:false, 
                link: "See all Users",
                icon: <PersonOutlined className="icon" 
                style={{ color: "crimson",
                backgroundColor: "rgba(225, 0, 0,  0.2)"
            }} />,
            };
            break;
            case "order":
                data = {
                    title:"ORDERS",
                    isMoney:false,
                    link: "View all Users",
                    icon: ( <ShoppingCartOutlined className="icon"
                     style={{ 
                        color: "goldenrod",
                       backgroundColor: "rgba(218, 165, 32,  0.2)"  
                            }}  />
                ),
                };
                break;

                case "earning":
                    data = {
                        title:"EARNINGS",
                        isMoney:true,
                        link: "View net earnings",
                        icon:( <MonetizationOnOutlined className="icon"
                        style={{ color: "green",
                       backgroundColor: "rgba(0, 128, 0,  0.2)"        }}  />
                       ),
                       };
                    break;
                        case "balance":
                            data = {
                                title:"BALANCE ",
                                isMoney:false,
                                link: "View Balance",
                                icon:( <AccountBalanceOutlined className="icon"
                                style={{ color: "purple",
                                backgroundColor: "rgba(128, 0, 128,  0.2)"        }}  />
                                ),
                                };
                            break;
            default:
                break;

      }

    return (
        <div className="widget">
            <div className="left">
            
            <span className="title">{data.title}</span>
            <span className="title">{data.isMoney && "&"} {amount}</span>
            <span className="link">{data.link}</span>
            </div>
           
            

            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {diff}%
                </div>
                {props.icon }
            </div>
        </div>
    )
}

export default Widget 