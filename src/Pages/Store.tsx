import { Row, Col } from "react-bootstrap";
import StoreItems from "../Data/Item.json";
import { StoreItem } from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Store() {
    
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3}>
                {StoreItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}