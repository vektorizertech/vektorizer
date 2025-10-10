interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: `'Segoe UI', Roboto, Helvetica, Arial, sans-serif`, backgroundColor: '#f4f7fa', padding: '40px 0' }}>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                background: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
                border: '1px solid #e5eaf1'
            }}>
                {/* Header */}
                <div style={{
                    background: 'linear-gradient(to right, #6e57e0, #867ae9)',
                    color: '#ffffff',
                    padding: '24px',
                    textAlign: 'center',
                }}>
                    <h1 style={{ margin: 0, fontSize: '22px' }}>📨 You&apos;ve Got a New Message</h1>
                    <p style={{ marginTop: 6, fontSize: '14px', color: '#ddd' }}>From your Vektorizer contact form</p>
                </div>

                {/* Body */}
                <div style={{ padding: '32px' }}>
                    <table cellPadding={0} cellSpacing={0} style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ paddingBottom: '16px' }}>
                                    <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#333' }}>Name</span>
                                    <span style={{ color: '#555' }}>{name}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '16px' }}>
                                    <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#333' }}>Email</span>
                                    <span style={{ color: '#555' }}>{email}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '16px' }}>
                                    <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#333' }}>Subject</span>
                                    <span style={{ color: '#555' }}>{subject}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ paddingBottom: '8px' }}>
                                    <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#333' }}>Message</span>
                                    <div style={{
                                        background: '#f5f7fa',
                                        borderRadius: '6px',
                                        padding: '16px',
                                        lineHeight: '1.6',
                                        color: '#444',
                                        border: '1px solid #e0e6ed',
                                        whiteSpace: 'pre-line',
                                    }}>
                                        {message}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div style={{
                    backgroundColor: '#f9fafc',
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '13px',
                    color: '#999',
                    borderTop: '1px solid #e5eaf1'
                }}>
                    <p style={{ margin: 0 }}>
                        © {new Date().getFullYear()} <strong>Vektorizer</strong>. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
