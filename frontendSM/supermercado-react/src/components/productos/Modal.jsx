const styles = {
    overlay:{
        position: "fixed",
        top:0,
        left:0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modal:{
        background: "white",
        padding: "20px",
        borderRadius:"8px",
        minWidth:"300px",

    },
    closeBtn:{
        marginTop: "10px",
    }};

export default function Modal({children, onClose}) {
    return(
        <div>
            <div>
                {children}
                <button onClick={onClose} style={styles.closeBtn}>Cerrar</button>
            </div>
        </div>
    )}
    