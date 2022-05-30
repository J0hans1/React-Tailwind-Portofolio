import '../css/WaveTransition.css';
import Wave from 'react-wavify'

export default WaveTransition;

function WaveTransition(props){
    return (
        <div className="wave-container">
            <div className='waves'>
                <Wave
                    className="wave1"
                    fill={props.color}
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 30,
                        speed: 0.2,
                        points: 6
                    }}
                />
                <Wave
                    className='wave2'
                    fill={props.color + "60"}
                    paused={false}
                    options={{
                        height: 10,
                        amplitude: 30,
                        speed: -0.2,
                        points: 4
                    }}
                />
            </div>
        </div>
    );
}
