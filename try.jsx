// ReactStrap'den kullanmak istediğimiz component'leri import etmemiz gerekli.
import { Container, Row, Col } from "reactstrap";

// App Class Componenti:
export default class App extends Component {
  state = {
    currentCategory: "", // Tıklama eventi ile tıklanan kategorinin ismini yazdırmak için kullancağız.
    products: [],
  };

  // onClick fonksiyonu çalıştığında bu fonksiyonu çalıştırır.
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  componentDidMount(){
    this.getProducts();
  }

  getProducts() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())                  // response'u json'a döndürüyoruz
      .then((data) => this.setState({ products: data }));   // state'in product değerini değiştirip data yapıyoruz.
  }

  render() {
    let categoryInfo = {
      title: "Category List",
    };

    let productInfo = {
      title: "Product List",
    };

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}