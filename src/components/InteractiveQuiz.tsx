
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const { toast } = useToast();

  const questions = [
    {
      question: "O que mais te tira o sono hoje em dia?",
      options: [
        "Pressão no trabalho",
        "Conflitos nos relacionamentos",
        "Uma sensação de estar perdido(a)",
        "Preocupações financeiras"
      ]
    },
    {
      question: "Como você se sente no final de um dia típico?",
      options: [
        "Exausto(a) e sem energia",
        "Satisfeito(a) mas cansado(a)",
        "Ansioso(a) sobre o próximo dia",
        "Desconectado(a) de mim mesmo(a)"
      ]
    },
    {
      question: "O que mais te motiva a buscar mudanças?",
      options: [
        "Melhorar minha performance",
        "Encontrar mais equilíbrio",
        "Compreender melhor meus sentimentos",
        "Construir relacionamentos mais saudáveis"
      ]
    },
    {
      question: "Em momentos difíceis, você tende a:",
      options: [
        "Se isolar e refletir sozinho(a)",
        "Buscar apoio de outras pessoas",
        "Mergulhar no trabalho ou atividades",
        "Sentir-se paralisado(a) e confuso(a)"
      ]
    },
    {
      question: "O que representa sucesso para você neste momento?",
      options: [
        "Paz interior e autoconhecimento",
        "Reconhecimento profissional",
        "Relacionamentos harmoniosos",
        "Estabilidade emocional"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
    toast({
      title: "Obrigado!",
      description: "Seu insight personalizado foi gerado. Confira abaixo.",
    });
  };

  const getPersonalizedInsight = () => {
    // Simple logic based on first answer for demo
    const firstAnswer = answers[0];
    if (firstAnswer.includes("trabalho")) {
      return "Parece que o ambiente profissional tem sido sua maior fonte de desgaste. Focar em estratégias para lidar com o estresse e o burnout pode ser um caminho poderoso para recuperar seu bem-estar e encontrar um equilíbrio mais saudável.";
    } else if (firstAnswer.includes("relacionamentos")) {
      return "Os conflitos interpessoais podem ser profundamente desgastantes. Explorar padrões de relacionamento e desenvolver habilidades de comunicação pode transformar não apenas seus vínculos, mas sua percepção de si mesmo.";
    } else if (firstAnswer.includes("perdido")) {
      return "A sensação de estar perdido é um convite para uma jornada de autoconhecimento. A psicanálise pode ajudar a clarear seus valores, desejos e direções, criando um caminho mais autêntico e significativo.";
    } else {
      return "As preocupações financeiras muitas vezes refletem questões mais profundas sobre segurança e valor pessoal. Trabalhar essas questões pode trazer não apenas alívio prático, mas também uma relação mais saudável com o dinheiro e sucesso.";
    }
  };

  if (showResult) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-slate-800 mb-8">
            Seu Insight Personalizado
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Olá, {leadData.name}! 
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {getPersonalizedInsight()}
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Agendar uma conversa
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (showLeadForm) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Quase lá!
            </h2>
            <p className="text-lg text-slate-600">
              Para receber seu insight personalizado, deixe seus dados:
            </p>
          </div>
          <form onSubmit={handleLeadSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <Input
                placeholder="Seu nome"
                value={leadData.name}
                onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                required
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={leadData.email}
                onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                required
                className="h-12"
              />
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-xl"
              >
                Receber meu insight
              </Button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-slate-800 mb-6">
            Qual o seu principal desafio neste momento?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Responda 5 perguntas rápidas e receba um insight personalizado sobre os caminhos possíveis para o seu bem-estar.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-slate-500 mb-2">
              <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium text-slate-800 mb-8">
              {questions[currentQuestion].question}
            </h3>
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  onClick={() => handleAnswer(option)}
                  className="p-6 text-left h-auto border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveQuiz;
