export const PrivacyPolicy = () => {
    return (
        <div className="p-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-6">Políticas de Privacidade</h2>

            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Tipos de Dados Coletados</h3>
                <p className="text-gray-700">
                    Este aplicativo não coleta dados pessoais sensíveis. O único dado solicitado é o nome do usuário, que é opcional e pode ser fornecido somente se o usuário desejar. Não há coleta de informações relacionadas à câmera, localização, ou outros dados pessoais. O aplicativo também não utiliza ferramentas de rastreamento.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Modo e Local de Processamento dos Dados</h3>
                <p className="text-gray-700">
                    O nome fornecido, caso o usuário escolha inseri-lo, é armazenado localmente no dispositivo e não é compartilhado com terceiros. Não há coleta, armazenamento ou compartilhamento de qualquer outro dado do dispositivo. O aplicativo foi desenvolvido para operar totalmente offline, sem requerer permissões como acesso à câmera, armazenamento, ou localização.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Período de Conservação</h3>
                <p className="text-gray-700">
                    Como o aplicativo não coleta dados obrigatórios, não há necessidade de conservar informações. O nome inserido pode ser removido a qualquer momento pelo próprio usuário diretamente nas configurações do aplicativo.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Uso dos Dados Coletados</h3>
                <p className="text-gray-700">
                    O nome fornecido, se inserido, será usado apenas para personalizar a experiência do usuário dentro do aplicativo (ex.: exibir o nome nas pontuações e rankings). Não utilizamos essas informações para qualquer outro fim.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Permissões de Dispositivo para Acesso a Dados Pessoais</h3>
                <p className="text-gray-700">
                    Este aplicativo não solicita permissões de acesso a dispositivos, como câmera, armazenamento, ou localização. Todos os dados fornecidos permanecem locais e privados ao usuário.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Ação Jurídica</h3>
                <p className="text-gray-700">
                    Em caso de ação judicial ou exigência legal, o desenvolvedor não será capaz de fornecer dados pessoais dos usuários, uma vez que tais informações não são coletadas ou armazenadas.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Direitos dos Usuários</h3>
                <p className="text-gray-700">
                    Os usuários podem, a qualquer momento, excluir o nome inserido no aplicativo diretamente nas configurações ou redefinir todos os dados do aplicativo. Como não há coleta de dados sensíveis ou de navegação, não são necessários mecanismos adicionais para a gestão de dados.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Mudanças nesta Política de Privacidade</h3>
                <p className="text-gray-700">
                    Esta política pode ser atualizada periodicamente para refletir melhorias no aplicativo ou mudanças legais. Recomenda-se que os usuários revisem esta página regularmente. Caso não concorde com as alterações, o usuário pode interromper o uso do aplicativo a qualquer momento.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">Contato</h3>
                <p className="text-gray-700">
                    Para dúvidas ou mais informações sobre esta política de privacidade, o usuário pode entrar em contato no e-mail abaixo.
                </p>
                <p className="text-blue-600 cursor-pointer">
                    contato@shiftbrasil.io
                </p>
            </div>
        </div>
    );
};

