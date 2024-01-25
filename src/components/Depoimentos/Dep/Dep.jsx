import React from 'react'

const Dep = ({ img, name, cargo, dep }) => {
    return (
        <div className="dep-cards">
            <div className="dep">

                <div className="dep-person">
                    <div className="img"
                        style={{ backgroundImage: `url(${img})` }}
                    >

                    </div>

                    <div className="person">
                        <p className="name">{name}</p>
                        <p className="cargo">{cargo}</p>
                    </div>

                </div>

                <div className="dep-text">

                    <p>
                        <span className="comments">
                            "
                        </span>

                        {dep}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Dep