import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";

import {
  Briefcase,
  Award,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <DashboardLayout>

      <Topbar />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Internships"
          value="4"
          icon={<Briefcase />}
        />

        <StatCard
          title="Certificates"
          value="2"
          icon={<Award />}
        />

        <StatCard
          title="Assessments"
          value="7"
          icon={<ClipboardList />}
        />

        <StatCard
          title="Completed"
          value="92%"
          icon={<CheckCircle />}
        />

      </div>

    </DashboardLayout>
  );
}