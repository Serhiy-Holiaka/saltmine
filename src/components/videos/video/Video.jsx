const Videos = ({ sourcesList }) => {

    return (
        <video height="auto" preload="metadata" muted onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()} className="">
            {sourcesList &&
                sourcesList.map((item, i) => (
                    <source key={i} src={item.src} type={item.type} />
                ))}
            Your browser is not suported!
        </video>
    );
};

export default Videos;
