import './App.css';
import Plot from 'react-plotly.js'

function App() {
    return (
      <Plot
        data={[
            {
                x: ['SBCB', 'FXTB', 'RUSB'],
                y: ['SBCB', 'FXTB', 'RUSB'],
                z: [[1.0, 0.20, -0.30], [0.20, 1.0, -1.0], [-0.30, -1.0, 1.0]],
                type: 'heatmap',
                colorscale: [
                  [0, '#ff0000'],
                  [1, '#00ff00']
                ]
            }
        ]}
      />
    );
}

export default App;
