import React from 'react'

const CategoryFilter = () => {
    return (<>
        <div className="accordion" id="categoryAccordion">
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button collapsed"
                        style={{ fontSize: "13px", color: '#333', border: 'none' }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        <h6>Category</h6>
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#categoryAccordion"
                >
                    <div className="accordion-body">
                        {/* Search Bar */}
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Search..."
                            style={{ fontSize: '12px' }}
                        />
                        {/* Checkbox Items */}
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="footwear" />
                            <label className="form-check-label" htmlFor="footwear">Footwear</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="tops" />
                            <label className="form-check-label" htmlFor="tops">Tops</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="bottoms" />
                            <label className="form-check-label" htmlFor="bottoms">Bottoms</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="outerwear" />
                            <label className="form-check-label" htmlFor="outerwear">Outerwear</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal-line' style={{ marginTop: "1px", maxWidth: "210px", marginLeft: '15px', borderBottom: '1px solid #ddd' }} />
        </div>
    </>)
}

export default CategoryFilter
