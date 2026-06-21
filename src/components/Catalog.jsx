import { useState } from "react";
import { Construction, Package, Settings, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { productCategories } from "../data/companyData";

const iconMap = {
  Construction,
  Package,
  Settings,
};

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [expandedProduct, setExpandedProduct] = useState(null);

  const activeData = productCategories.find((c) => c.id === activeCategory);

  return (
    <section id="catalog" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Katalog Produktów</h2>
          <p className="section-subtitle mx-auto">
            Profesjonalne osprzęty i narzędzia do maszyn budowlanych, logistycznych i rolniczych.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {productCategories.map((cat) => {
            const IconComp = iconMap[cat.icon] || Settings;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedProduct(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25"
                    : "bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-amber-500/30 hover:text-amber-400"
                }`}
              >
                <IconComp className="w-5 h-5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {activeData && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeData.products.map((product) => {
              const isExpanded = expandedProduct === product.name;
              return (
                <div
                  key={product.name}
                  className={`card flex flex-col transition-all duration-300 ${
                    isExpanded ? "border-amber-500/40" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 ml-3">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      </div>
                    </div>
                    <div className="inline-block bg-amber-500/10 text-amber-400 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {product.spec}
                    </div>
                    <p
                      className={`text-slate-400 text-sm leading-relaxed transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-2"
                      }`}
                    >
                      {product.description}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setExpandedProduct(isExpanded ? null : product.name)
                    }
                    className="flex items-center gap-1 text-xs text-amber-500 hover:text-amber-400 mt-4 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        Zwiń <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        Czytaj więcej <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}