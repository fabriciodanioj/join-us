import React from "react";

import "./styles.css";

export default function ProductInfo() {
  return (
    <div className="product-info">
      <h1>RASTEIRA TIRA DEDO</h1>
      <h2>RT 0568 | 03.07.0653</h2>
      <div className="prices">
        <h1>R$ 69,00</h1>
        <h2>R$ 55,20</h2>
      </div>
      <p>Ou 6x de R$ 9,20</p>
      <div className="color">
        <p>Cor:</p>
        <p className="color-name">(Fucsia)</p>
      </div>
      <div className="color-pallete">
        <button style={{ backgroundColor: "#A9095E" }}></button>
        <button style={{ backgroundColor: "#2A5A75" }}></button>
        <button style={{ backgroundColor: "#A14830" }}></button>
        <button style={{ backgroundColor: "#000000" }}></button>
      </div>
      <div className="size">
        <p>Tamanho:</p>
        <p className="size-number">(37)</p>
        <a href="www" className="guide">
          Guia de Medidas
        </a>
      </div>
      <div className="size-options">
        <button>33</button>
        <button>34</button>
        <button>35</button>
        <button>36</button>
        <button>37</button>
        <button>38</button>
        <button>39</button>
        <button>40</button>
        <button>41</button>
        <button>42</button>
      </div>
      <button className="add-to-cart">ADICIONAR À SACOLA</button>
      <p className="product-description">
        Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui
        sola sempre na cor do cabedal.
      </p>
    </div>
  );
}
