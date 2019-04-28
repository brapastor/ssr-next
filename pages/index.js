export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola mundo </h1>
                <p>Bienvenidos al curso de next.js</p>
                <img src="/static/logo.png"  alt="logo"/>

                <style jsx>{`
                    h1 {
                    color:white;
                    }
                    div :global(p){
                    color:green;
                    }
                    img {
                        max-width: 200px;
                        display: block;
                        margin: 0 auto;
                    }
                `}
                </style>

                <style jsx global>{`
                  body{
                       background: peru;
                    }
                `}</style>

            </div>
        )
    }
}