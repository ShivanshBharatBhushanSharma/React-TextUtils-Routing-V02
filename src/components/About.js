import React from 'react'

export default function About(props) {

  return (
    <div className="container">
        <h1 className="my-3" style={{color: props.myStyle.color}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={props.myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={props.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time to read text. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={props.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={props.myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to ount characters facebook, blog, books, excel document, pdf document, essays, c. 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
