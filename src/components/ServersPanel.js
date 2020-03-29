import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServersPanel.css';

const ServersPanel = () => {
  const [serverData, setServerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverInfo = await axios(
          'https://api.rust-servers.info/info/3508',
        );
        console.log(serverInfo);

        setServerData(serverInfo.data);
      } catch (err) {
        setServerData(null);
        console.error('Server Error.');
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div>
        <h1 className='totalplayers'>Total Online: {serverData.players_cur}</h1>
        <div className='servers'>
          <div className='server-1'>
            <img src={serverData.image} style={{ width: '100%' }} />
            <div className='card-box'>
              <p>RUSTLAB 2X SOLO/DUO/TRIO</p>
              <p>IP: {serverData.ip}</p>
              <div
                style={{ backgroundColor: 'green !important;' }}
                className='borderserver'
              ></div>
              <h2 className='player-count'>
                {serverData.players_cur}/{serverData.players_max}
              </h2>
              <ul className='server-info'>
                <li>2x gather</li>
                <li>quick night</li>
                <li>noob friendly</li>
                <li>weekly wipes</li>
              </ul>
            </div>
            <div className='section-btn'>
              <a
                href={`steam://connect/${serverData.ip}`}
                className='connect btn btn-sm btn-primary-outline display-4'
              >
                Connect
              </a>
              <a className='vip btn btn-sm btn-primary-outline display-4'>
                VIP (Coming Soon)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServersPanel;
