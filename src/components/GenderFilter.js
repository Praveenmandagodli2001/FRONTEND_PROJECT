import React from 'react'

const GenderFilter = () => {
    return (<>
        <div className="accordion" id="genderAccordion">
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingGender">
                    <button
                        className="accordion-button collapsed"
                        style={{ fontSize: "13px", color: '#333', border: 'none' }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseGender"
                        aria-expanded="false"
                        aria-controls="collapseGender"
                    >
                        <h6>Gender</h6>
                    </button>
                </h2>
                <div
                    id="collapseGender"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingGender"
                    data-bs-parent="#genderAccordion"
                >
                    <div className="accordion-body">
                        {/* Checkbox Items */}
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="boys" />
                            <label className="form-check-label" htmlFor="boys">Boys</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="men" />
                            <label className="form-check-label" htmlFor="men">Men</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="girls" />
                            <label className="form-check-label" htmlFor="girls">Girls</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="women" />
                            <label className="form-check-label" htmlFor="women">Women</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='horizontal-line' style={{ marginTop: "1px", maxWidth: "210px", marginLeft: '15px', borderBottom: '1px solid #ddd' }} />
        </div>
    </>)
}

export default GenderFilter
