import { Input } from "reactstrap"
import './style.scss'
const Adminsignup = () => {
    const knowAbout = ["Browser Search", "Google Ad", "SNS Add","Blogs","Comparative Article","Acquaintance","Other"]
    return (
        <>
          <section className="container-fluid forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>
                        <form >
                            <div className="field input-field">
                                <Input
                                    type="text"
                                    placeholder="Company name"
                                    className="input"
                                    name="companyname"
                                   />
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="text"
                                    placeholder="Company Size"
                                    className="input"
                                    name="companysize"
                                />
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="text"
                                    placeholder="Engineer, Designer, Marketer"
                                    className="input"
                                    name="role"
                                />
                               
                            </div>
                            <div className="field input-field">
                                <Input
                                    type="text"
                                    placeholder="Company Size"
                                    className="input"
                                    name="companysize"
                                />
                                 {knowAbout.map((item:any) => {
                                    return (
                                        <li>{ item}</li>
                                    )
                                })}
                            </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default Adminsignup