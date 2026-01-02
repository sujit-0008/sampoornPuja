import { Layout } from "./../../components/layout/Layout";
import { PageHeader } from "./../../components/shared/PageHeader";
import { ProductCard } from "./../../components/shared/ProductCard";
import { SectionTitle } from "./../../components/shared/SectionTitle";
import productImage from "./../../assets/pooja-box-product.png";
import blueBackground from "./../../assets/Orange.png";

const products = [
  {
    id: 1,
    title: "Shree Sampoorna Pooja Box",
    subtitle: "Complete Pooja Set for All Rituals",
    image: productImage,
  },
  {
    id: 2,
    title: "Shree Sampoorna Pooja Box",
    subtitle: "Complete Pooja Set for All Rituals",
    image: productImage,
  },
  {
    id: 3,
    title: "Shree Sampoorna Pooja Box",
    subtitle: "Complete Pooja Set for All Rituals",
    image: productImage,
  },
  {
    id: 4,
    title: "Shree Sampoorna Pooja Box",
    subtitle: "Complete Pooja Set for All Rituals",
    image: productImage,
  },
];

const Products = () => {
  return (

    <div className="bg-fit bg-cover bg-center "
              style={{ backgroundImage: `url(${blueBackground.src})` }}>
  <Layout>
      <PageHeader
        title="Products"
        subtitle="All Types of Pooja Essentials in One Box"
        breadcrumb="Products"
      />

      <section className="py-16 ">
        <div className="container">
          <SectionTitle title="Our Best Pooja Products" className="mb-10" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                subtitle={product.subtitle}
                image={product.image}
              />
            ))}
          </div>
                </div>
      </section>
      </Layout>
    
    </div>
  );
};

export default Products;
