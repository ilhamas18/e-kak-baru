import React, { useState, useEffect } from 'react'


const ConsoleData = () => {

  const [state, setstate] = useState([]);


  return (
    <div className="tree">
      <ul>
        <li>
          <div><button>Pohon Kinerja</button></div>
          <ul>
            <li>
              <div>A 1</div>
            </li>
            <li>
              <div>A 2</div>
              <ul>
                <li>
                  <div>B 1</div>
                </li>
                <li>
                  <div>B 2 </div>
                  <ul>
                    <li>
                      <div>C 1</div>
                      <ul>
                        <li>
                          <div>D 1</div>

                        </li>
                      </ul>

                    </li>
                    <li>
                      <div>C 2</div>
                      <ul>
                        <li>
                          <div>D 2</div>

                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

        </li>
      </ul>

    </div>
  )
}


export default ConsoleData